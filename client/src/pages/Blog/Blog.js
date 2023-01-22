import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner,
} from 'reactstrap';
import styles from './blog.module.css';

function Blog() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const newPosts = await fetch('/api/get_posts?' + new URLSearchParams({
          page: 0,
          perPage: 20,
        }), {
        signal: controller.signal,
      }).then((response) => {
      if (response.status === 401) {
          setError(401);
          return [];
        }
        setError(null);
        return response.json();
      }).catch((err) => {
        if (err.name === 'AbortError') return;
        throw err;
      });
      setPosts(newPosts || []);
      setLoading(false);
    };
    getPosts();
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center">
        <Spinner />
      </Container>
    );
  }

  return (
    <Container className={styles.infcontainer}>
      <div className={styles.page}>
        <Row>
          {error ? (
            <p>Авторизуйтесь</p>
          ) : (
            <>
              <form method="post" action="/api/logout/">
                <div>
                  <input type="submit" value="Выйти" />
                </div>
              </form>
              <Link
                className={styles.button}
                to="/new_post"
              >
                Новый пост
              </Link>
              {!posts.length ? (
                <p>Пока тут пусто...</p>
              ) : (
                posts.map((post) => (
                  <Col className="mt-2 mb-5">
                    <Card key={post._id}>
                      <CardBody>
                        <CardTitle tag="h1">{post.title}</CardTitle>
                        <CardText>{post.content}</CardText>
                        <CardText>
                          <i>
                            Написал
                            {' '}
                            {post.author}
                            ,
                            {' '}
                            {post.timestamp}
                          </i>
                        </CardText>
                        <hr />
                      </CardBody>
                    </Card>
                  </Col>
                ))
              )}
            </>
          )}
        </Row>
      </div>
    </Container>
  );
}

export default Blog;
