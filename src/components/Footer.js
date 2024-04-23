const Footer = () => {
  return (
    <div className="">
      <div>
        <div className="space-y-3 mb-10">
          <h4 className="text-base font-normal">What's next?</h4>
          <h1>
            <span className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Get In Touch
            </span>
          </h1>
          <p className="text-base font-normal">
            I like to create things with fun, open-minded people. Feel free to
            say hello!
          </p>
        </div>
        <div className="flex justify-around gap-x-12 items-center">
          <div className="flex-col w-full max-w-3xl p-5 shadow-white/15 rounded shadow-2xl bg-[#0D0C23]">
            <form className="card-body p-3">
              <h2 className="text-2xl text-left mb-5">
                Let Work Together
                <span className="text-[#000000]">!</span>
              </h2>
              <div className="flex justify-between  gap-4 mb-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered focus:border-primary bg-[#0D0C23]"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered focus:border-primary bg-[#0D0C23]"
                    required
                  />
                </div>
              </div>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered focus:border-primary bg-[#0D0C23]"
                  required
                />
              </div>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32 focus:border-primary bg-[#0D0C23]"
                  placeholder="Bio"
                ></textarea>
              </div>
              <div className="card-actions justify-end mt-3">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div>
              <div className="divider w-[600px] divider-accent mx-auto">
                <span className="bg-clip-text text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Or
                </span>
              </div>
              <div className="join mt-4 join-vertical gap-5 lg:join-horizontal">
                <button className="btn join-item">Button</button>
                <button className="btn join-item">Button</button>
                <button className="btn join-item">Button</button>
              </div>
              <p className="mt-5">
                <span className=" bg-clip-text text-base font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  md.jahangir.alam9649@gmail
                </span>
              </p>
            </div>
          </div>
          <div className="flex-col w-full max-w-xl">Earth</div>
        </div>
      </div>
      <div className="mt-20">
        <small className="text-base">
          Copyright © - All right reserved by{" "}
          <span className="bg-clip-text text-base font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Md. Jahangir Alam
          </span>
        </small>
      </div>
    </div>
  );
};

export default Footer;
