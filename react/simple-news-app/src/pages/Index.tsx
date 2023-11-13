import {useRecords} from "@apibrew/react";
import {Category, CategoryEntityInfo} from "../model/category";
import {News, NewsEntityInfo} from "../model/news";

export function IndexPage() {
    const categories = useRecords<Category>(CategoryEntityInfo) || []
    const newsList = useRecords<News>(NewsEntityInfo) || []

    return (
        <div>
            {categories.map(category => (
                <div>
                    <h1>{category.title}</h1>
                    <p key={category.id}>{category.description}</p>
                    <div>
                        {newsList.filter(news => news.category?.id === category.id).map(news => (
                            <div>
                                <h2>{news.title}</h2>
                                <p>{news.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
