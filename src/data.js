const productData = [
    { id: 1, title: 'شال نخی', price: 80000, count: 20, img: 'img/product/1.webp', color: " مشکی و طوسی " },
    { id: 2, title: 'شال بافت', price: 70000, count: 40, img: 'img/product/2.webp', color: "مشکی و قرمز" },
    { id: 3, title: 'شال موهر', price: 100000, count: 10, img: 'img/product/3.webp', color: "مشکی و نارنجی" },
    { id: 4, title: 'شال ابریشمی', price: 90000, count: 100, img: 'img/product/4.webp', color: "مشکی و زرد" },
    { id: 5, title: 'شال مخملی', price: 55000, count: 60, img: 'img/product/5.webp', color: "مشکی و طوسی" },
    { id: 6, title: 'روسری جنگل', price: 120000, count: 5, img: 'img/product/6.webp', color: "مشکی و سیز" },
]

const chartHome = [
    { name: 'فروردین', thisYear: 4000, lastYear: 2400 },
    { name: 'اردیبهشت', thisYear: 3000, lastYear: 1400 },
    { name: 'خرداد', thisYear: 2000, lastYear: 9800 },
    { name: 'تیر', thisYear: 2780, lastYear: 3900 },
    { name: 'مرداد', thisYear: 1900, lastYear: 4800 },
    { name: 'شهریور', thisYear: 2400, lastYear: 3800 },
]

let ticketData = [
    { id: 1, name: 'علی خلیلی', desc: 'سلام وقتتون بخیر . متاسفانه هنوز سفارش من به دستم نرسیده است' },
    { id: 2, name: 'برزو صادقی', desc: 'سلام مجدد . بنده هر چقدر با فروشگاه تماس میگیرم کسی پاسخگو نیست' },
    { id: 3, name: 'مریم بابایی', desc: 'سلام و احترام . کالایی که بنده سفارش دادم با رنگی متفاوت به دستم رسیده است' },
    { id: 4, name: 'فیروز یاری', desc: 'سلام بر مجموعه خوبتون . خواستم تشکر کنم از همگی و اینکه کالای بنده چرا تعویض نمیگردد' },
    { id: 5, name: 'غلام فرامرزی', desc: 'من نمیدونم مدیریت داره چیکار میکنه که الان ۲ روزه نمیتونم از سایت خرید کنم' },
    { id: 6, name: 'امیر اسماعیلی', desc: 'من هیچ تیکتی ندارم و قصدم از ایجاد این تیکت مزاحمت است و بس' },
]

let userData = [
    {
        id: 1, name: 'اصغر نقی زاده', tel: "09102347689", age: 23, city: 'تهران',
        chart: [
            { month: 'تیر', sale: 2000 },
            { month: 'مرداد', sale: 3000 },
            { month: 'شهریور', sale: 1000 },
        ]
    },
    {
        id: 2, name: 'سهیلا داداشی', tel: "09136754321", age: 44, city: 'مشهد',
        chart: [
            { month: 'تیر', sale: 3000 },
            { month: 'مرداد', sale: 2000 },
            { month: 'شهریور', sale: 5000 },
        ]
    },
    {
        id: 3, name: 'زهرا گیلکی', tel: "09108974563", age: 32, city: 'قزوین',
        chart: [
            { month: 'تیر', sale: 5000 },
            { month: 'مرداد', sale: 1000 },
            { month: 'شهریور', sale: 3000 },
        ]
    },
    {
        id: 4, name: 'مریم احمدی', tel: "09904879009", age: 15, city: 'لرستان',
        chart: [
            { month: 'تیر', sale: 1600 },
            { month: 'مرداد', sale: 1000 },
            { month: 'شهریور', sale: 3000 },
        ]
    },
    {
        id: 5, name: 'صادق فریبایی', tel: "09123232456", age: 19, city: 'شیراز',
        chart: [
            { month: 'تیر', sale: 5000 },
            { month: 'مرداد', sale: 4000 },
            { month: 'شهریور', sale: 2000 },
        ]
    },
    {
        id: 6, name: 'محسن قمی', tel: "09186668998", age: 28, city: 'کرج',
        chart: [
            { month: 'تیر', sale: 2500 },
            { month: 'مرداد', sale: 3500 },
            { month: 'شهریور', sale: 1500 },
        ]
    },
]

let offsData = [
    { id: 1, percent: 10, start: 'یکم شهریور', end: 'پنجم شهریور', title: 'شال نخی', img: 'img/product/1.webp' },
    { id: 2, percent: 15, start: 'یکم مرداد', end: 'ششم مرداد', title: 'شال بافت', img: 'img/product/2.webp' },
    { id: 3, percent: 10, start: 'یکم تیر', end: 'چهارم تیر', title: 'شال موهر', img: 'img/product/3.webp' },
    { id: 4, percent: 20, start: 'یکم خرداد', end: 'پنجم خرداد', title: 'شال ابریشمی', img: 'img/product/4.webp' },
    { id: 5, percent: 30, start: 'یکم اردیبهشت', end: 'چهارم اردیبهشت', title: 'شال مخملی', img: 'img/product/5.webp' },
    { id: 6, percent: 25, start: 'یکم فروردین', end: 'هشتم فروردین', title: 'روسری جنگل', img: 'img/product/6.webp' },
]

let saleProductTop = [
    { id: 1, name: 'سه ماه اول', value: 3000 },
    { id: 2, name: 'سه ماه دوم', value: 4000 },
    { id: 3, name: 'سه ماه سوم', value: 3000 },
    { id: 4, name: 'سه ماه آخر', value: 2000 },
]
let buyProductTop = [
    { id: 1, name: 'سه ماه اول', value: 2000 },
    { id: 2, name: 'سه ماه دوم', value: 3000 },
    { id: 3, name: 'سه ماه سوم', value: 4000 },
    { id: 4, name: 'سه ماه آخر', value: 3000 },
]

const dataSaleBottom = [
    {
        name: 'month 1',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: 'month 2',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: 'month 3',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: 'month 4',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: 'month 5',
        uv: 8.63,
        pv: 3908,
        fill: '#a4de6c',
    },
    {
        name: 'month 6',
        uv: 2.63,
        pv: 4800,
        fill: '#d0ed57',
    },
    {
        name: 'month 7',
        uv: 6.67,
        pv: 4800,
        fill: '#ffc658',
    },
];
const dataBuyBottom = [
    {
        name: 'month 1',
        uv: 34.67,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: 'month 2',
        uv: 28.63,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: 'month 3',
        uv: 25.63,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: 'month 4',
        uv: 20.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: 'month 5',
        uv: 15.69,
        pv: 3908,
        fill: '#a4de6c',
    },
    {
        name: 'month 6',
        uv: 10.69,
        pv: 4800,
        fill: '#d0ed57',
    },
    {
        name: 'month 7',
        uv: 7.47,
        pv: 4800,
        fill: '#ffc658',
    },
];

let orderData = [
    { id: 1, name: 'اصغر نقی زاده', title: 'شال نخی', price: '160.000', count: 2, color: "مشکی " },
    { id: 2, name: 'سهیلا داداشی', title: 'شال بافت', price: '280.000', count: 4, color: "قرمز" },
    { id: 3, name: 'زهرا گیلکی', title: 'شال موهر', price: '100.000', count: 1, color: "نارنجی" },
    { id: 4, name: 'مریم احمدی', title: 'شال ابریشمی', price: '900.000', count: 10, color: "مشکی و زرد" },
    { id: 5, name: 'صادق فریبایی', title: 'شال مخملی', price: '330.000', count: 6, color: "طوسی" },
    { id: 6, name: 'محسن قمی', title: 'روسری جنگل', price: '600.000', count: 5, color: "سبز" },
]

export { productData, chartHome, ticketData, userData, offsData, saleProductTop, buyProductTop, dataSaleBottom, dataBuyBottom, orderData }