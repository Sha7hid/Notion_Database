import { Client } from "@notionhq/client"
import NOTION_KEY from './secret';
import NOTION_DATABASE_ID from './secret'
const notion = new Client({ auth: NOTION_KEY })

const databaseId = NOTION_DATABASE_ID

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