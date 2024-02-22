import { createContext, useReducer } from "react";

export const PostListContext = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currentPostList.filter((post) => {
            return post.id !== action.payload.postId;
        })
    }
    else if (action.type === "ADD_INITIAL_POST_LIST") {
        newPostList = action.payload.posts
    }
    else if (action.type === "ADD_POST") {
        newPostList = [action.payload.post, ...currentPostList];
    }
    return newPostList;
}

const PostListContextProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer,
        // DEFAULT_POST_LIST
        []
    );


    const addInitialPostList = (posts) => {
        const newPost = {
            type: "ADD_INITIAL_POST_LIST",
            payload: {
                posts
            },
        }
        dispatchPostList(newPost);
    }

    const addPost = (post) => {
        const newPost = {
            type: "ADD_POST",
            payload: {
                post,
            }
        }
        dispatchPostList(newPost);
    };
    const deletePost = (postId) => {
        const newPost = {
            type: "DELETE_POST",
            payload: {
                postId
            },
        }
        dispatchPostList(newPost);
    }


    // inside the value we have to provide values like this because all the values are of same name that is why -> 
    // postList:postList,
    // addPost:addPost,
    // deletePost:deletePost,
    return (
        <PostListContext.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostListContext.Provider>
    )
}

// const DEFAULT_POST_LIST = [
//     {
//         id: '1',
//         title: 'Job Seeker',
//         body: 'I am looking for a job relevant to Software Engineering, Web Development, Web Designing, etc.',
//         reactions: 12,
//         tags: ['Software Developer', 'Web Developer', 'Web Designer'],
//         userId: 'user_1',
//     },
//     {
//         id: '2',
//         title: 'Freelance Writer',
//         body: 'Experienced writer seeking freelance opportunities in content creation, blog posts, and copywriting.',
//         reactions: 5,
//         tags: ['Freelance Writer', 'Content Creator', 'Copywriter'],
//         userId: 'user_2',
//     },
//     {
//         id: '3',
//         title: 'Graphic Designer',
//         body: 'Passionate graphic designer looking for projects related to branding, logo design, and digital illustrations.',
//         reactions: 10,
//         tags: ['Graphic Designer', 'Branding', 'Digital Illustration'],
//         userId: 'user_3',
//     },
//     {
//         id: '4',
//         title: 'Photographer',
//         body: 'Professional photographer available for events, portraits, and commercial photography. Check out my portfolio!',
//         reactions: 18,
//         tags: ['Photographer', 'Events', 'Portraits'],
//         userId: 'user_4',
//     },
//     {
//         id: '5',
//         title: 'Fitness Enthusiast',
//         body: 'Certified personal trainer seeking clients for personalized fitness plans and wellness coaching.',
//         reactions: 38,
//         tags: ['Personal Trainer', 'Fitness', 'Wellness Coaching'],
//         userId: 'user_5',
//     },
//     {
//         id: '6',
//         title: 'Marketing Specialist',
//         body: 'Results-driven marketing professional looking for opportunities in digital marketing and social media management.',
//         reactions: 70,
//         tags: ['Marketing Specialist', 'Digital Marketing', 'Social Media Management'],
//         userId: 'user_6',
//     },
//     {
//         id: '7',
//         title: 'Language Tutor',
//         body: 'Experienced language tutor offering lessons in Spanish, French, and German. Customized learning plans for all levels.',
//         reactions: 4,
//         tags: ['Language Tutor', 'Spanish', 'French', 'German'],
//         userId: 'user_7',
//     },
//     {
//         id: '8',
//         title: 'Virtual Assistant',
//         body: 'Detail-oriented virtual assistant with skills in administrative tasks, email management, and customer support.',
//         reactions: 6,
//         tags: ['Virtual Assistant', 'Administrative Tasks', 'Customer Support'],
//         userId: 'user_8',
//     },
//     {
//         id: '9',
//         title: 'Game Developer',
//         body: 'Passionate game developer seeking exciting projects in game design and programming. Proficient in Unity and Unreal Engine.',
//         reactions: 12,
//         tags: ['Game Developer', 'Game Design', 'Unity', 'Unreal Engine'],
//         userId: 'user_9',
//     },
//     {
//         id: '10',
//         title: 'E-commerce Entrepreneur',
//         body: 'Entrepreneurial spirit with a focus on e-commerce ventures. Looking for collaboration opportunities in online business.',
//         reactions: 19,
//         tags: ['E-commerce', 'Entrepreneurship', 'Online Business'],
//         userId: 'user_10',
//     },
// ];

export default PostListContextProvider;

