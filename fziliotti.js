// load in puppeteer
const puppeteer = require('puppeteer')

// this wrapper means immediately execute this code
void(async () => {
    // wrapper to catch errors
    try {
        // create a new browser instance
        const browser = await puppeteer.launch()

        // create a page inside the browser
        const page = await browser.newPage()


        var links = [
            'https://fziliotti.github.io/Fziliotti/',
            'https://fziliotti.github.io/BlogFziliotti/',
            'https://fziliotti.github.io/FZ-To-Do/',
            'https://fziliotti.github.io/OnePageFZ/',
            'https://fziliotti.github.io/list-of-skills/#/'
        ]


        for (var i = 0; i < links.length; i++) {
            // navigate to a website
            await page.goto(links[i])

            // take a screenshot and save it to
            // this folder/screenshots/page1.png
            await page.screenshot({
                path: "./screenshots/fziliotti/pageFziliotti-" + i + ".png"
            })

            // generate a pdf of the page and save it to
            // this folder/pdfs/page1.pdf
            await page.pdf({
                path: "./pdfs/fziliotti/pageFziliotti-" + i + ".pdf"
            })

        }

        console.log("Os Prints e pdfs foram gerados com sucesso")

        // all done, close this browser
        await browser.close()
    } catch (error) {
        // if something goes wrong
        // display the error message in console
        console.log(error)
    }
})()