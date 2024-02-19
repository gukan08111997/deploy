export default function Pagination({totalPosts,postsPerPage,onSetPage}){
    let page = [];
for (let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
    page.push(i);
}
    return(<>
    {page.map((page,index)=>
<button key={index} onClick={()=>onSetPage(page)}>{page}</button>
    )}
    </>)
}