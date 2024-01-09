import { BlogData } from "./interfaces/blog";



export const blogs: BlogData[] = [
    {
        id: 1,
        src: "/images/blog/blog_card.png",
        title: "Zero Click Account Takeover - Password Overwrite",
        desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
        date: "july 24 2023",
    },
    {
        id: 2,
        src: "/images/blog/blog_card.png",
        title: "Zero Click Account Takeover - Password Overwrite",
        desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
        date: "july 24 2023",
    },
    {
        id: 3,
        src: "/images/blog/blog_card.png",
        title: "Zero Click Account Takeover - Password Overwrite",
        desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
        date: "july 24 2023",
    },
    {
        id: 4,
        src: "/images/blog/blog_card.png",
        title: "Zero Click Account Takeover - Password Overwrite",
        desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
        date: "july 24 2023",
    },
    {
        id: 5,
        src: "/images/blog/blog_card.png",
        title: "Zero Click Account Takeover - Password Overwrite",
        desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
        date: "july 24 2023",
    },
    {
        id: 6,
        src: "/images/blog/blog_card.png",
        title: "Zero Click Account Takeover - Password Overwrite",
        desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
        date: "july 24 2023",
    },
    {
        id: 7,
        src: "/images/blog/blog_card.png",
        title: "Zero Click Account Takeover - Password Overwrite",
        desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
        date: "july 24 2023",
    },
];


export function getBlogById(id: number): BlogData | undefined {

    return blogs.find((blog) => blog.id === id);
} 