import { faChartLine, faCommentDollar, faGear, faHouseChimney, faMoneyBill, faNewspaper, faPaperPlane, faUser, faWallet } from "@fortawesome/free-solid-svg-icons";

// person images
import person_one from "../../src/Assets/images/p_one.png";
import person_two from "../../src/Assets/images/p_two.jpg";
import person_three from "../../src/Assets/images/p_three.jpg";
import person_four from "../../src/Assets/images/p_four.jpg";



export const navigationLinks = [
    { id: 1, title: 'Home', icon: faHouseChimney },
    { id: 2, title: 'Budget', icon: faNewspaper },
    { id: 3, title: 'Transactions', icon: faPaperPlane },
    { id: 4, title: 'Subscriptions', icon: faWallet },
    { id: 5, title: 'Loans', icon: faMoneyBill },
    { id: 6, title: 'Reports', icon: faChartLine },
    { id: 7, title: 'Savings', icon: faWallet },
    { id: 8, title: 'Financial Advice', icon: faCommentDollar },
    { id: 9, title: 'Account', icon: faUser },
    { id: 10, title: 'Settings', icon: faGear }
];

export const transactions = [
    {
        id: 11, 
        name: "Sarah Parker",
        icon: person_four,
        date: "23/12/23",
        amount: 22000
    },
    {
        id: 12, 
        name: "Krisitine Carter",
        icon: person_three,
        date: "23/07/24",
        amount: 20000
    },
    {
        id: 13, 
        name: "Irene Doe",
        icon: person_two,
        date: "23/08/25",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budgetLi = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/26",
        amount: 20000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/24",
        amount: 5000
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/27",
        amount: 2000
    }
];

export const savings = [
    {
        id: 27,
        icon: person_one,
        saving_amount: 250000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/24",
        amount_left: 40000
    }
]