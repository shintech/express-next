/*  /pages/_app.js
*/
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { PageTransition } from 'next-page-transitions'
import { reduxPage } from 'state'

class MyApp extends App {
  render () {
    const { Component, pageProps, store } = this.props
    const TIMEOUT = 500

    return (
      <Container>
        <Provider store={store}>
          <PageTransition timeout={TIMEOUT} classNames='page-transition'>
            <Component {...pageProps} />
          </PageTransition>
        </Provider>

        <style jsx global>{`
          .page-transition-enter main {
            opacity: 0;
            transform: translate3d(0, 5ch, 0);
          }
          .page-transition-enter-active main {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit main {
            opacity: 1;
          }
          .page-transition-exit-active main {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>
      </Container>
    )
  }
}

export default reduxPage(MyApp)
