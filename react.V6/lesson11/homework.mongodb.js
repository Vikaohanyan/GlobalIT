use('blogPlatformDB');

db.users.drop();
db.posts.drop();

const user1 = ObjectId();
const user2 = ObjectId();

db.users.insertMany([
  { _id: user1, name: "Armen", email: "armen@mail.com" },
  { _id: user2, name: "Anna", email: "anna@mail.com" }
]);

db.posts.insertMany([
  {
    title: "Ինչպես սովորել MongoDB",
    content: "MongoDB-ն շատ հեշտ է ու հարմար...",
    author: user1,
    tags: ["mongodb", "database", "tech"],
    status: "published",
    views: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Իմ առաջին սևագիրը",
    content: "Այս պոստը դեռ ոչ մեկ չպետք է տեսնի...",
    author: user1,
    tags: ["personal"],
    status: "draft",
    views: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "React-ի հիմունքները",
    content: "React-ը հզոր JS գրադարան է...",
    author: user2,
    tags: ["react", "frontend"],
    status: "published",
    views: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);



db.posts.aggregate([
  { $match: { status: "published" } },
  {
    $lookup: {
      from: "users",          
      localField: "author",   
      foreignField: "_id",   
      as: "authorDetails"     
    }
  }
]);


const samplePost = db.posts.findOne(); 

db.posts.findOneAndUpdate(
  { _id: samplePost._id },
  { $inc: { views: 1 } },
  { returnDocument: "after" }
);



db.posts.updateOne(
  { _id: samplePost._id, author: user1 }, 
  { $set: { title: "Թարմացված վերնագիր MongoDB-ի մասին" } }
);



db.posts.deleteOne({ _id: samplePost._id, author: user1 });

db.posts.find({ author: user1 });


db.posts.aggregate([
  {
    $facet: {
      "totalPosts": [{ $count: "count" }],
      "publishedPosts": [
        { $match: { status: "published" } },
        { $count: "count" }
      ],
      "topAuthor": [
        { $group: { _id: "$author", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 1 }
      ]
    }
  }
]);