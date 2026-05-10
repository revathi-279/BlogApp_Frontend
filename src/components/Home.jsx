import { NavLink } from "react-router";
function Home() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">

      <div className="max-w-5xl mx-auto text-center mt-10">
        <h1 className="text-5xl font-bold text-purple-900 mb-5">
          Welcome to BlogApp
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          Discover technical blogs, coding tutorials, project experiences,
          and developer stories all in one place. Learn from others,
          share your knowledge, and grow together with the community.
        </p>

        <NavLink to="/register"
        className= "bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-lg">
          Explore Blogs
        </NavLink>
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-4xl mb-3 text-center">✍️</div>
          <h2 className="text-xl font-semibold mb-4 text-purple-900 text-center">
            Write Blogs
          </h2>

          <p className="text-gray-600 text-center">
            Share coding tips, tutorials, and project experiences
            with other developers.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-4xl mb-3 text-center">📚</div>
          <h2 className="text-xl font-semibold mb-4 text-purple-900 text-center">
            Read Articles
          </h2>

          <p className="text-gray-600 text-center">
            Explore content on MERN stack, web development,
            databases, and modern technologies.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-4xl mb-3 text-center">🤝</div>
          <h2 className="text-xl font-semibold mb-4 text-purple-900 text-center">
            Community
          </h2>

          <p className="text-gray-600 text-center">
            Connect with students and developers who enjoy
            learning and building projects.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-4xl mb-3 text-center">🚀</div>
          <h2 className="text-xl font-semibold mb-4 text-purple-900 text-center">
            Improve Skills
          </h2>

          <p className="text-gray-600 text-center">
            Stay updated with trending technologies and
            strengthen your development skills.
          </p>
        </div>
      </div>


      <div className="max-w-4xl mx-auto mt-20 bg-white border rounded-lg p-10 text-center shadow-sm">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">
          Share Your Knowledge
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Turn your coding experiences into meaningful articles
          and help others learn through your ideas and projects.
        </p>

        <NavLink to = "/register" 
        className= "bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-lg">
          Start Writing
        </NavLink>
      </div>

    </div>
  );
}

export default Home;