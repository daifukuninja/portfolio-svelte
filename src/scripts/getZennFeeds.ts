import axios from "axios";

export const getZennFeeds = async <T>(username: string): Promise<T> => {

    return new Promise<T>(function (resolve, reject) {
        // TODO: rss2jsonを経由しなくていいようにしたい(cors問題)
        const serverURL = `https://api.rss2json.com/v1/api.json?rss_url=https://zenn.dev/${username}/feed`;

        axios
            .get(serverURL)
            .then((response) => {
                if (response.status == 200) {
                    resolve(response.data);
                } else {
                    reject(Error(response.statusText));
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                // skip
            });
    });

}

export interface Root {
    status: string
    feed: Feed
    items: Item[]
}

interface Feed {
    url: string
    title: string
    link: string
    author: string
    description: string
    image: string
}

interface Item {
    title: string
    pubDate: string
    link: string
    guid: string
    author: string
    thumbnail: string
    description: string
    content: string
    enclosure: Enclosure
    categories: any[]
}

interface Enclosure {
    link: string
    type: string
}
