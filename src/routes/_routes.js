// declare Menu Items Here
import Info from "../components/pages/info/Info";
import CourseList from "../components/pages/courseList/CourseList";
import UserInfo from "../components/pages/userInfo/UserInfo";
import ConsultForm from "../components/pages/consultForm/ConsultForm";
import BankInfo from "../components/pages/bankInfo/BankInfo";

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
                    icon: 'info circle'
                },
                {
                    title: 'لیست دروس ارائه شده دانشکده ها در ترم جاری',
                    path: '/courseList',
                    component: CourseList,
                    icon: 'th list'
                },
                {
                    title: 'فرم مشاوره انتخاب واحد',
                    path: '/consultForm',
                    component: ConsultForm,
                    icon: 'edit'
                },
                {
                    title: 'پرداخت اینترنتی دانشجویان',
                    path: '/payment',
                    component: '',
                    icon: 'payment'
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
                    component: BankInfo,
                    icon: 'money bill alternate outline'
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
                    path: '/consuldsaftForm',
                    component: '',
                },
                {
                    title: 'لیست امتحانات پایانترم',
                    path: '/payment',
                    component: '',
                },
                {
                    title: 'برنامه هفتگی دانشجو',
                    path: '/dsafdsconsultForm',
                    component: '',
                },
            ]
    },
    { // An Item
        title: 'امور کارنامه',
        path: 'grades',
        subItems:
            [
                { // A SubItem
                    title: 'وضعیت تحصیلی و ریزنمرات دانشجو',
                    path: 'StudentInfo',
                    component: UserInfo,
                    icon: 'graduation cap'
                },
                {
                    title: 'لیست نمرات موقت و ثبت اعتراض',
                    path: 'aaaaaaaaaaaa',
                    component: '',
                    icon: 'graduation cap'
                },

            ]
    },
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