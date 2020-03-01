// declare Menu Items Here
import Info from "../components/pages/info/Info";

let routes = [
    { // An Item
        title: 'امور ثبت نام و ترمیم',
        path: '/registration',
        subItems:
            [
                { // A SubItem
                    title: 'اطلاعیه و راهنمای ثبت نام و ترمیم',
                    path: '/info',
                    component: Info,
                    icon: 'info'
                },
                {
                    title: 'لیست دروس ارائه شده دانشکده ها در ترم جاری',
                    path: '/courseList',
                    component: '',
                },
                {
                    title: 'فرم مشاوره انتخاب واحد',
                    path: '/consult',
                    component: '',
                },
                {
                    title: 'پرداخت اینترنتی دانشجویان',
                    path: '/payment',
                    component: '',
                }
            ]
    },
    { // An Item
        title: 'خدمات آموزشی',
        path: '/education',
        subItems:
            [
                { // A SubItem
                    title: 'ثبت اطلاعات بانکی دانشجو',
                    path: '/studentBankInfo',
                    component: '',
                },
                {
                    title: 'تطبیق دروس دانشجو با چارت',
                    path: '/courseMatching',
                    component: '',
                },
                {
                    title: 'صدور فرم احراز',
                    path: '/consult',
                    component: '',
                },
                {
                    title: 'کارتابل درخواست',
                    path: '/payment',
                    component: '',
                },
                {
                    title: 'فرم ثبت نام دانشجو',
                    path: '/consult',
                    component: '',
                },
                {
                    title: 'لیست امتحانات پایانترم',
                    path: '/payment',
                    component: '',
                },
                {
                    title: 'برنامه هفتگی دانشجو',
                    path: 'consult',
                    component: '',
                },
            ]
    },
    { // An Item
        title: 'خدمات آموزشی',
        path: 'education',
        subItems:
            [
                { // A SubItem
                    title: 'ثبت اطلاعات بانکی دانشجو',
                    path: 'StudentBankInfo',
                    component: '',
                },
                {
                    title: 'تطبیق دروس دانشجو با چارت',
                    path: 'courseMatching',
                    component: '',
                },
                {
                    title: 'صدور فرم احراز',
                    path: 'consult',
                    component: '',
                },
                {
                    title: 'کارتابل درخواست',
                    path: 'payment',
                    component: '',
                },
                {
                    title: 'فرم ثبت نام دانشجو',
                    path: 'consult',
                    component: '',
                },
                {
                    title: 'لیست امتحانات پایانترم',
                    path: 'payment',
                    component: '',
                },
                {
                    title: 'برنامه هفتگی دانشجو',
                    path: 'consult',
                    component: '',
                },
            ]
    },
    { // An Item
        title: 'خدمات آموزشی',
        path: 'education',
        subItems:
            [
                { // A SubItem
                    title: 'ثبت اطلاعات بانکی دانشجو',
                    path: 'StudentBankInfo',
                    component: '',
                },
                {
                    title: 'تطبیق دروس دانشجو با چارت',
                    path: 'courseMatching',
                    component: '',
                },
                {
                    title: 'صدور فرم احراز',
                    path: 'consult',
                    component: '',
                },
                {
                    title: 'کارتابل درخواست',
                    path: 'payment',
                    component: '',
                },
                {
                    title: 'فرم ثبت نام دانشجو',
                    path: 'consult',
                    component: '',
                },
                {
                    title: 'لیست امتحانات پایانترم',
                    path: 'payment',
                    component: '',
                },
                {
                    title: 'برنامه هفتگی دانشجو',
                    path: 'consult',
                    component: '',
                },
            ]
    }
]
export const getAllRoutes = () => {
    let r = []
    routes.forEach(item => {
            item.subItems.forEach(
                subItem => {
                    r = r.concat({path: subItem.path, component: subItem.component})
                }
            )
        }
    )
    return r
}

export default routes;