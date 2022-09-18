import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

async function addToDatabase(databaseId, name, number, extra) {
    try {
        const response = await notion.pages.create({
            parent: {
                database_id: databaseId,
            },
            properties: {
                'Name': {
                    type: 'title',
                    title: [
                    {
                        type: 'text',
                        text: {
                            content: name,
                        },
                    },
                    ],
                },
                'PhoneNumber' : {
                        type: 'rich_text',
                        rich_text: [
                        {
                            type: 'text',
                            text: {
                                content: number,
                            },
                        }
                        ],
                },
                'ExtraInformation' : {
                    type: 'rich_text',
                    rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: extra,
                        },
                    }
                    ],
            },
            }    
        });
        console.log(response);
    } catch (error) {
        console.error(error.body);
    }
}
addToDatabase(databaseId, 'shahid','7994959712','hello');