import { request, gql } from 'graphql-request'
const MASTER_URL="https://api-eu-west-2.hygraph.com/v2/cltiizul20ios07wijxuxxs4o/master"

export const getCourseList=async(level)=>{
    const query=gql`
    query CourseList {
        courses(where: {level: `+level+`}) {
          name
          id
          level
          price
          tags
          time
          author
          description {
            markdown
          }
          bannner {
            url
          }
          chapters {
            id
          }
        }
      }      
    `
    const result = await request(MASTER_URL, query)
    return result;
}