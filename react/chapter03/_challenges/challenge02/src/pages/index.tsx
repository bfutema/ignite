import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from '@prismicio/client';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useState } from 'react';
import Header from '../components/Header';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  const [posts, setPosts] = useState<PostPagination>(() => {
    if (postsPagination) {
      return postsPagination;
    }

    return { next_page: null, results: [] };
  });

  async function handleLoadMorePosts(): Promise<void> {
    const response = await fetch(postsPagination.next_page);
    const data: PostPagination = await response.json();

    const { next_page } = data;

    setPosts({
      next_page,
      results: [...posts.results, ...data.results],
    });
  }

  return (
    <>
      <Head>
        <title>Início | Space Traveling</title>
      </Head>

      <Header />

      <main className={styles.container}>
        <section className={styles.posts}>
          {posts.results.map(post => (
            <Link key={post.uid} href={`/post/${post.uid}`}>
              <a>
                <strong>{post.data.title}</strong>
                <p>{post.data.subtitle}</p>

                <div className={commonStyles.info}>
                  <div>
                    <FiCalendar />
                    <time>
                      {format(
                        new Date(post.first_publication_date),
                        'dd MMM yyyy',
                        { locale: ptBR }
                      )}
                    </time>
                  </div>

                  <div>
                    <FiUser />
                    <span>{post.data.author}</span>
                  </div>
                </div>
              </a>
            </Link>
          ))}

          {posts.next_page && (
            <button
              type="button"
              className={styles.loadMorePosts}
              onClick={handleLoadMorePosts}
            >
              Carregar mais posts
            </button>
          )}
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    { pageSize: 2 }
  );

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: postsResponse.results.map(post => {
      const { uid, first_publication_date } = post;
      const { title, subtitle, author } = post.data;

      return { uid, first_publication_date, data: { title, subtitle, author } };
    }),
  };

  return { props: { postsPagination } };
};
