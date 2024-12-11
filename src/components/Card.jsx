function Card({username}) {
  
  return (
    <div className="flex w-screen justify-center">
      {/* <h1 className="bg-orange-400 p-4 rounded-md">hey thereee!!</h1> */}
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://i.ytimg.com/vi/Ahx-vDuymwM/maxresdefault.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            plattypus {username} mahashey
          </h2>
        </div>
        <p className="text-gray-300">
          {username} is an undercover hero who tries to keep the world safe. Whenever
          Phineas and Ferb are not around him, he grabs his hat, and finds
          Doofenshmirtz.
        </p>
      </div>
    </div>
  );
}

export default Card;
