import { Appbar } from "../components/Appbar";
import { FullBlog, Skeleton } from "../components/FullBlog";
import { useBlog } from "../hooks";
import {useParams} from "react-router-dom";

// atomFamilies/selectorFamilies
export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    
    return <div>
    {loading || !blog ? (
        <div className="">
            <div className="">
                <Appbar/>
                <Skeleton isDarkMode={true}/>
            </div>
        </div>
    ) : (
        <FullBlog blog={blog} />
    )}
</div>
}