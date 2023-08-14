import axios from 'axios'
import cheerio from 'cheerio'
import { ItemModel } from '../models/item.model.js';

export const postScrapedData = async (req, res) => {
  const { url } = req.body;
  const {id} = req.user;

  const existingUrl = await ItemModel.findOne({user:id,url})

  if(existingUrl){
    return res.status(400).json({"message":"URL already exists for user"})
  }
  
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    
    const title = $('span.B_NuCI').text();
    const priceString = $('div._30jeq3._16Jk6d').text();
    const numericPart = priceString.replace('$', '').replace(/[^0-9.]/g, '');
    const price = parseFloat(numericPart);
    const description = $('div._1mXcCf.RmoJUa').text().trim() || null;
    const rating_count = parseInt($('span._2_R_DZ').text().replace(/,/g, '').split(' ')[0]);
    const ratingsText = $('span._2_R_DZ span._13vcmD').next().text();
    const review_count = parseInt(ratingsText.replace(',', '').split(' ')[0]);
    const rating = parseFloat($('div._3LWZlK').text());
    const media_count = $('img.q6DClP').length;

    console.log('Title:', title);
    console.log('Price:', price);
    console.log('Description:', description);
    console.log('Reviews Count:', review_count);
    console.log('Rating Count:', rating_count);
    console.log('Ratings:', rating);
    console.log('Media Count:', media_count);
    
    const scrapedData = await ItemModel.create({
      user: req.user.id, 
      url,
      title,
      price,
      description,
      review_count,
      rating_count,
      rating,
      media_count,
    });

    res.status(201).json(scrapedData);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error scraping and posting data' });
  }
};
