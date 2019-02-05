import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        // Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet()

        const originalRenderPage = ctx.renderPage

        // Retrieve styles from components in the page
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            // Extract the styles as <style> tags and Pass styleTags as a prop
            return {
                ...initialProps,
                styles: [...initialProps.styles, ...sheet.getStyleElement()],
            }
        } finally {
            // avoid memory leak
            sheet.seal()
        }
    }
}
