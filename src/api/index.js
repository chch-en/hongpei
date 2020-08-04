// 百科 
// https://api.hongbeibang.com/education/getNewbieGuide?type=5&_t=1595302386473

import axios from "axios"

let fetchData = axios.create({
  baseURL: "https://api.hongbeibang.com"
})


//技巧百科 接口
export async function baike () {
  return await fetchData.get("/education/getNewbieGuide?type=5&_t=1595302386473")
}



// 热门推荐
export async function baike_lun () {
  return await fetchData.get("/recommend/getRandContent?_t=1595377154557&type=3&pageSize=10")
}

// 详情  带有视频 
export async function baike_detail (id) {
  return await fetchData.get(`/education/getStartClassByNewbie?_t=1595385836206&educationCourseId=` + id)
}

// ....
export async function baike_dd () {
  return await fetchData.get(`/education/getIndexByWeb?kX8IelJrTOrDIEJI9GjQDngV0GoqWLAm0IS2Rtf5my4`)
}

// 烘焙圈
// 最新https://api.hongbeibang.com/v2/feed/getNew?_t=1595389068919&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NDY5MTA5NSwiaWF0IjoxNTk1Mzg4Njk1fQ.xWzeMlhWR79-9exqPtWY_34IcqtUIwGvEMAD52RMe2s&pageIndex=0&pageSize=10

// 首页接口  https://api.hongbeibang.com/education/getIndexByWeb?kX8IelJrTOrDIEJI9GjQDngV0GoqWLAm0IS2Rtf5my4

// 面包 --- 网红爆款 
// 2---推荐课程
// 3 ---无 

export async function demo () {
  return await fetchData("/v2/feed/getNew?_t=1595646711807&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NDY5MTA5NSwiaWF0IjoxNTk1Mzg4Njk1fQ.xWzeMlhWR79-9exqPtWY_34IcqtUIwGvEMAD52RMe2s&pageIndex=0&pageSize=10")
}



// 烘焙圈

// 烘焙圈轮播图
// https://api.hongbeibang.com/feed/getCategory
export async function quan_tu () {
  return await fetchData("/feed/getCategory")
}

// 最新下的分享
// https://api.hongbeibang.com/v2/feed/getNew?csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NDY5MTA5NSwiaWF0IjoxNTk1Mzg4Njk1fQ.xWzeMlhWR79-9exqPtWY_34IcqtUIwGvEMAD52RMe2s&pageIndex=0&pageSize=10
// export async function quan_user(){
//   return await fetchData("/v2/feed/getNew?pageIndex=0&pageSize=10")
// }

// 夏季分享
// https://api.hongbeibang.com/community/getByLimit?isShow=4&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NDY5MTA5NSwiaWF0IjoxNTk1Mzg4Njk1fQ.xWzeMlhWR79-9exqPtWY_34IcqtUIwGvEMAD52RMe2s&pageIndex=0&pageSize=99
export async function quan_share () {
  return await fetchData("/community/getByLimit?isShow=4&pageIndex=0&pageSize=99")
}



// 达人
// https://api.hongbeibang.com/v2/feed/getMasterNew?pageIndex=0&pageSize=10
// https://api.hongbeibang.com/v2/feed/getMasterNew?pageIndex=0&pageSize=10
// https://api.hongbeibang.com/v2/feed/getNew?pageIndex=0&pageSize=10

let fetchData1 = axios.create({
  baseURL: "http://47.105.216.247/cureSystem-1.0-SNAPSHOT/"   //根端口路径
})

export async function login (data) {
  return await fetchData1.post("/users/login.action", { username: data.username, password: data.password })
}

//注册
export async function register (data) {
  // console.log(data)
  // let res = await user_repeat(data);
  // console.log(res)
  // return res.data.length > 0
  // ? "对不起用户名已经重复"
  return await fetchData1.post("/users/regist.action", {
    ...data
  })
}

// 验证用户名  是否重复 
// export async function user_repeat (data) {
//   return await fetchData1.get("/users", { params: { username: data.username } })
// }

