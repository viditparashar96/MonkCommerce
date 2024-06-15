const userData = [
  {
    userId: "user1",
    name: "Sam",
    unreadCount: 3,
    profilePictureURL:
      "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    chat: [
      {
        you: {
          message: "Hey",
          timeStamp: "10:41",
        },
        otherUser: {
          message: "Hello",
          timeStamp: "10:40",
        },
      },
      {
        you: {
          message: "Fine mate, how about you?",
          timeStamp: "10:42",
        },
        otherUser: {
          message: "How are you doing?",
          timeStamp: "10:41",
        },
      },
      {
        otherUser: {
          message: "great",
          timeStamp: "10:44",
        },
        you: {
          message: "Coming to my wedding right? I don't think you confirmed.",
          timeStamp: "10:44",
        },
      },
      {
        otherUser: {
          message: "Oh yes. There is no way i am going to miss that.",
          timeStamp: "10:44",
        },
        you: {
          message:
            "Awesome. See ya there. Let me know if you want me to book tickets.",
          timeStamp: "10:45",
        },
      },
    ],
  },
  {
    userId: "user2",
    name: "Elon",
    unreadCount: 2,
    profilePictureURL:
      "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    chat: [
      {
        otherUser: {
          message: "there?",
          timeStamp: "11:39",
        },
        you: {
          message: "yeah, whats up?",
          timeStamp: "11:47",
        },
      },
      {
        otherUser: {
          message: "movie tomorrow?",
          timeStamp: "11:49",
        },
        you: {
          message: "Yeah sure. let me know the timings. and which movie again?",
          timeStamp: "11:52",
        },
      },
      {
        otherUser: {
          message: "the new mad max movie. Reviews are great.",
          timeStamp: "11:52",
        },
        you: {
          message: "Oh yes, i have been waiting for that one.",
          timeStamp: "11:54",
        },
      },
    ],
  },
  {
    userId: "user3",
    name: "Kate",
    unreadCount: 1,
    profilePictureURL:
      "https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    chat: [
      {
        otherUser: {
          message: "that burger was delicious!",
          timeStamp: "13:12",
        },
        you: {
          message: "Oh yes, no doubt.",
          timeStamp: "13:13",
        },
      },
      {
        otherUser: {
          message: "We are definetely going to that place again.",
          timeStamp: "13:13",
        },
        you: {
          message: "we are. My mouth waters whenever drive thorugh that area",
          timeStamp: "13:14",
        },
      },
      {
        otherUser: {
          message: "haha, I bet. Lets take Tony and Natasha too next time",
          timeStamp: "13:14",
        },
        you: {
          message: "Sure. they would love it",
          timeStamp: "13:15",
        },
      },
    ],
  },
];

export default userData;
