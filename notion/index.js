import { Client } from '@notionhq/client';

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

export async function getDatabase(){
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
    });

    return response.results
}

export async function getPage(pageId){
    const response = await notion.pages.retrieve({page_id: pageId});

    return response
}   
