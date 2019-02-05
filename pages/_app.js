import App, { Container } from 'next/app'
import { Provider } from 'unstated'
import { listContainer } from '../src/state'
import GlobalStyle from '../src/style/globalStyle'
// import '../src/style/bootstrap.css'
// import '../src/style/App.css'

export default class MyApp extends App {
    constructor(props) {
        super(props)
        const {
            props: { filter },
        } = this
        if (process.browser) {
            // hydrate store container with data from local storage
            listContainer.restoreData()
            // then update the local filter to what is in server
            if (filter === 'active') {
                listContainer.updateFilter('Active')
            } else if (filter === 'done') {
                listContainer.updateFilter('Done')
            } else {
                listContainer.updateFilter('All')
            }
        }
    }
    static async getInitialProps(context) {
        if (!process.browser) {
            // get filter mode from request query
            // can directly change the state value as nothing is rendered yet
            const filter = context.router.query.filter
            if (filter === 'active') {
                listContainer.state.filter = 'Active'
            } else if (filter === 'done') {
                listContainer.state.filter = 'Done'
            } else {
                listContainer.state.filter = 'All'
            }
            return { filter }
        } else {
            return {}
        }
    }
    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Provider inject={[listContainer]}>
                    <GlobalStyle />
                    <Component {...pageProps} />{' '}
                </Provider>
            </Container>
        )
    }
}
