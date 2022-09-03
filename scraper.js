






const puppeteer = require('puppeteer');
const fs = require('fs/promises');



async function start() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto("https://www.bovada.lv/static/poker-game/?lobby=%2Fpoker-lobby%2Fhome");
  // await page.screenshot({path: "poker.png", fullPage: true})

  const balance = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("span.f1n1diy1.balanceLargeSize")).map(x => x)
  })

  // const balance = await page.evaluate(() => {
  //   return Array.from(document.querySelectorAll("span.f1n1diy1.balanceLargeSize").map(x => x.textContent))
  // })


  // const balance = await page.$eval("f1n1diy1.balanceLargeSize", el => el.textContent);


await fs.writeFile('balance.txt', balance);

await browser.close();
}

start()

//https://www.bovada.lv/static/poker-game/?lobby=%2Fpoker-lobby%2Fhome
//https://www.bovada.lv/static/poker-game/?lobby=%2Fpoker-lobby%2Fhome
//


// #root > div > div.frlfvhr > div.f1l5nl24 > div.fmyv4dc > div.f1qy5s7k > div.f17p9mxt.Desktop.f1u9jrie > div.f1so0fyt > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(2) > div.fbefu8h.leftPlayer.notZone.fimvvv > div > span
// #root > div > div.frlfvhr > div.f1l5nl24 > div.fmyv4dc > div.f1qy5s7k > div.f17p9mxt.Desktop.f1u9jrie > div.f1so0fyt > div.f19gzrfz.Desktop > div:nth-child(3) > div:nth-child(3) > div > div.f1n5gqte.f169eucp.f45h > svg







// const PORT = 8000;
// const axios = require('axios');
// const cheerio = require('cheerio');
// const express = require('express');
// const app = express();
//           // 'https://www.bovada.lv/static/poker-game/?lobby=%2Fpoker-lobby%2Fhome'
// let urk = `https://www.bovada.lv/static/poker-game/?lobby=%2Fpoker-lobby%2Fhome`;
// let url = `https://www.bovada.lv/static/poker-game/?lobby=%2Fpoker-lobby%2Fhome`;
// let testURL = `https://www.theguardian.com/us`


// // specify which url to crawl through
// axios(url)
// //specify what to do after
// .then((response) => {
//   const html = response.data;
//   const $ = cheerio.load(html);
//   const totalPot = []
//   const totalpot2 = []
//   const articles = []

// // scrape for cards on board
// // main div class   - class="frr1nh5"
// // second div class - f1n5gqte fplgmm0 f1sesc10
// // third div class  - f1n5gqte f169eucp f45h
// // data-qa="card-<#>"  fill in #
// // $('', html).each(function(){ 

//   // $('#root > div > div.frlfvhr > div.f1l5nl24 > div.fmyv4dc > div.f1qy5s7k > div.f17p9mxt.Desktop.f1u9jrie > div.f1so0fyt > div.f19gzrfz.Desktop > div:nth-child(3) > div:nth-child(3) > div > div.f1n5gqte.f169eucp.f45h > svg', html).each(function(){ 
//     $('span.f1n1diy1.balanceLargeSize', html).each(function(){ 

  
//     const pot = $(this).text();
//     // const notSure = $(this).attr('href');
//     totalPot.push({pot})}
//   );
  
//   // $('alt data-qa', html).each(function(){ 
//   //   const pot2 = $(this).text();
//   //   // const notSure = $(this).attr('href');
//   //   totalPot.push({pot2})
//   // }); 

//   // $('.fc-item__title', html).each(function(){ 
//   //   const title = $(this).text();
//   //   const url = $(this).find('a').attr('href');
//   //   // const notSure = $(this).attr('href');
//   //   totalPot.push({title, url})
//   // });

 
//   console.log(totalPot); 
// }).catch(err => console.log(err))


// app.listen(PORT, () => console.log(`server running on port ${PORT}`));

 

  





// // // Card 1 info
// // //<div class="f1jmqybh f1x351eq f45h" style="transition: transform 245ms ease 0s, opacity 245ms ease 0s; opacity: 0;"><svg viewBox="0 0 100 150" data-qa="card32"><style>.A-vUbfWGO8gEw83LdSWwgc4{fill:#fff}.B-vUbfWGO8gEw83LdSWwgc4{fill:#2b2b2b}</style><path class="A-vUbfWGO8gEw83LdSWwgc4" d="M90 0H10A10.03 10.03 0 0 0 0 10v130a10.03 10.03 0 0 0 10 10h80a10.03 10.03 0 0 0 10-10V10A10.03 10.03 0 0 0 90 0z"></path><path class="B-vUbfWGO8gEw83LdSWwgc4" d="M96.5 140a6.543 6.543 0 0 1-6.5 6.51H10.01A6.543 6.543 0 0 1 3.5 140V10A6.543 6.543 0 0 1 10 3.5h79.99A6.543 6.543 0 0 1 96.5 10z"></path><path class="B-vUbfWGO8gEw83LdSWwgc4" d="M89.99 3.5H10a6.543 6.543 0 0 0-6.5 6.51V140a6.543 6.543 0 0 0 6.511 6.5H90a6.543 6.543 0 0 0 6.5-6.51V10a6.543 6.543 0 0 0-6.511-6.5z"></path><path d="M59.747 74.042c3.348-9.572 2.872-15.632.16-19.7a10.944 10.944 0 0 0-9.016-4.864H33.983v10.048c-.08 2.312.48 11.724 14.676 17.228 8.296 3.6 10.208 7.736 10.048 9.572v1.036a4.4 4.4 0 0 1-3.908 4.8H41.4V75.878l-1.116-.876a22.192 22.192 0 0 1-6.3-7.02v32.54H54.96a12.208 12.208 0 0 0 11.008-12.76 15.396 15.396 0 0 0-6.22-13.72zm-8.456-5.024l-.16-.08c-7.656-2.952-9.732-7.02-9.732-8.852v-2.312h9.652a4.124 4.124 0 0 1 2.952 1.516l.24.48a12.672 12.672 0 0 1-.8 10.208z" fill="#ce2127"></path><path class="A-vUbfWGO8gEw83LdSWwgc4" d="M90 0H10A10.03 10.03 0 0 0 0 10v130a10.03 10.03 0 0 0 10 10h80a10.03 10.03 0 0 0 10-10V10A10.03 10.03 0 0 0 90 0zM96.5 140a6.543 6.543 0 0 1-6.5 6.51H10.01A6.543 6.543 0 0 1 3.5 140V10A6.543 6.543 0 0 1 10 3.5h79.99A6.543 6.543 0 0 1 96.5 10z"></path></svg></div>

// // // card 2 info
// // // <div class="f1jmqybh f1x351eq f45h" style="transition: transform 245ms ease 0s, opacity 245ms ease 0s; opacity: 0;"><svg viewBox="0 0 100 150" data-qa="card20"><style>.A-vUbfWGO8gEw83LdSWwgc4{fill:#fff}.B-vUbfWGO8gEw83LdSWwgc4{fill:#2b2b2b}</style><path class="A-vUbfWGO8gEw83LdSWwgc4" d="M90 0H10A10.03 10.03 0 0 0 0 10v130a10.03 10.03 0 0 0 10 10h80a10.03 10.03 0 0 0 10-10V10A10.03 10.03 0 0 0 90 0z"></path><path class="B-vUbfWGO8gEw83LdSWwgc4" d="M96.5 140a6.543 6.543 0 0 1-6.5 6.51H10.01A6.543 6.543 0 0 1 3.5 140V10A6.543 6.543 0 0 1 10 3.5h79.99A6.543 6.543 0 0 1 96.5 10z"></path><path class="B-vUbfWGO8gEw83LdSWwgc4" d="M89.99 3.5H10a6.543 6.543 0 0 0-6.5 6.51V140a6.543 6.543 0 0 0 6.511 6.5H90a6.543 6.543 0 0 0 6.5-6.51V10a6.543 6.543 0 0 0-6.511-6.5z"></path><path d="M59.747 74.042c3.348-9.572 2.872-15.632.16-19.7a10.944 10.944 0 0 0-9.016-4.864H33.983v10.048c-.08 2.312.48 11.724 14.676 17.228 8.296 3.6 10.208 7.736 10.048 9.572v1.036a4.4 4.4 0 0 1-3.908 4.8H41.4V75.878l-1.116-.876a22.192 22.192 0 0 1-6.3-7.02v32.54H54.96a12.208 12.208 0 0 0 11.008-12.76 15.396 15.396 0 0 0-6.22-13.72zm-8.456-5.024l-.16-.08c-7.656-2.952-9.732-7.02-9.732-8.852v-2.312h9.652a4.124 4.124 0 0 1 2.952 1.516l.24.48a12.672 12.672 0 0 1-.8 10.208z" fill="#ce2127"></path><path class="A-vUbfWGO8gEw83LdSWwgc4" d="M90 0H10A10.03 10.03 0 0 0 0 10v130a10.03 10.03 0 0 0 10 10h80a10.03 10.03 0 0 0 10-10V10A10.03 10.03 0 0 0 90 0zM96.5 140a6.543 6.543 0 0 1-6.5 6.51H10.01A6.543 6.543 0 0 1 3.5 140V10A6.543 6.543 0 0 1 10 3.5h79.99A6.543 6.543 0 0 1 96.5 10z"></path></svg></div>
// // // <svg viewBox="0 0 100 150" data-qa="card46"><style>.A-vUbfWGO8gEw83LdSWwgc4{fill:#fff}.B-vUbfWGO8gEw83LdSWwgc4{fill:#2b2b2b}</style><path class="A-vUbfWGO8gEw83LdSWwgc4" d="M90 0H10A10.03 10.03 0 0 0 0 10v130a10.03 10.03 0 0 0 10 10h80a10.03 10.03 0 0 0 10-10V10A10.03 10.03 0 0 0 90 0z"></path><path class="B-vUbfWGO8gEw83LdSWwgc4" d="M96.5 140a6.543 6.543 0 0 1-6.5 6.51H10.01A6.543 6.543 0 0 1 3.5 140V10A6.543 6.543 0 0 1 10 3.5h79.99A6.543 6.543 0 0 1 96.5 10z"></path><path class="B-vUbfWGO8gEw83LdSWwgc4" d="M89.99 3.5H10a6.543 6.543 0 0 0-6.5 6.51V140a6.543 6.543 0 0 0 6.511 6.5H90a6.543 6.543 0 0 0 6.5-6.51V10a6.543 6.543 0 0 0-6.511-6.5z"></path><path d="M59.747 74.042c3.348-9.572 2.872-15.632.16-19.7a10.944 10.944 0 0 0-9.016-4.864H33.983v10.048c-.08 2.312.48 11.724 14.676 17.228 8.296 3.6 10.208 7.736 10.048 9.572v1.036a4.4 4.4 0 0 1-3.908 4.8H41.4V75.878l-1.116-.876a22.192 22.192 0 0 1-6.3-7.02v32.54H54.96a12.208 12.208 0 0 0 11.008-12.76 15.396 15.396 0 0 0-6.22-13.72zm-8.456-5.024l-.16-.08c-7.656-2.952-9.732-7.02-9.732-8.852v-2.312h9.652a4.124 4.124 0 0 1 2.952 1.516l.24.48a12.672 12.672 0 0 1-.8 10.208z" fill="#ce2127"></path><path class="A-vUbfWGO8gEw83LdSWwgc4" d="M90 0H10A10.03 10.03 0 0 0 0 10v130a10.03 10.03 0 0 0 10 10h80a10.03 10.03 0 0 0 10-10V10A10.03 10.03 0 0 0 90 0zM96.5 140a6.543 6.543 0 0 1-6.5 6.51H10.01A6.543 6.543 0 0 1 3.5 140V10A6.543 6.543 0 0 1 10 3.5h79.99A6.543 6.543 0 0 1 96.5 10z"></path></svg> */}

 
// // // board cards




// // // total current pot

// // // <span class="f1au7gae" data-qa="totalPot">$0.25</span>
// // // player current balance on table
// // // <span class="f1n1diy1 balanceLargeSize" data-qa="playerBalance" style="transition: padding-right 280ms ease 0s;">$15.18</span>


// // // 7H - card 32
// // // KC - 12
// // // 8S - 46
// // // 8D - 20
// // // 2C card 1
// // // 1,2,3,4,5,6,7,8,9,10, 11,12,13,14
// // // 2,3,4,5,6,7,8,9,  10, j  q, k 




















