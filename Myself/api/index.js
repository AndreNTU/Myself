const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const crypto = require('crypto')
const nodemailer = require('nodemailer')

const app = express()
const port = 8000
const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const jwt = require("jsonwebtoken")

mongoose.connect("mongodb+srv://traderdre:andre@cluster0.xakisip.mongodb.net/", {

}).then(() => {
  console.log("Connected to MongoDB")
}).catch((err) => {
  console.log("Error Connecting to MongoDB")
})

app.listen(port, "192.168.0.14", () => {
  console.log("server is running on http://192.168.0.14")
})

const User = require("./models/user");
const Post = require("./models/post");

//endpoint to register a user in the backend
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    //create a new user
    const newUser = new User({ name, email, password });

    //generate and store the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the  user to the database
    await newUser.save();

    //send the verification email to the user
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "error registering user" });
  }
});

const sendVerificationEmail = async (email, verificationToken) => {
  //create a nodemailer transporter

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "thirdeyesniperz@gmail.com",
      pass: "ryvp stlb iioy unvw",
    }

  });

  //compose the email message
  const mailOptions = {
    from: "threads.com",
    to: email,
    subject: "Email Verification",
    text: `please click the following link to verify your email http://192.168.0.14:8000/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("error sending email", error);
  }
};

app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid token" });
    }

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.log("error getting token", error);
    res.status(500).json({ message: "Email verification failed" });
  }
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }

    if (user.password !== password) {
      return res.status(404).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});


// endpoint to create a new post in the backend
app.post("/create-post", async (req, res) => {
  try {
    const { content, userId } = req.body;

    const newPostData = {
      user: userId,
    };

    if (content) {
      newPostData.content = content;
    }

    const newPost = new Post(newPostData);

    await newPost.save();

    res.status(200).json({ message: "Post saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "post creation failed" });
  }
})


// endpoint to delete posts
app.delete('/delete-post/', async (req, res) => {
  try {
    await Post.deleteMany();
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) { 
    res.status(500).json({ message: 'An error occurred while deleting the post' }); 
  } 
}) 

// endpoint to get all the posts

app.get('/get-posts', async (req, res) => {
  try {

    const posts = await Post.find().populate('user', 'name').sort({ created_at: -1 })


    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: ' An error occured while getting the posts' })
  }
})

// endpoint to get the profile
app.get("/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error while getting the profile" });
  }
});