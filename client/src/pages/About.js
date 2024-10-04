import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="min-h-[80vh] w-[90%] md:w-[90%] sm:w-[70%] flex-col gap-4 m-auto flex items-center justify-center">
        <div>
            <h1 className="text-green-400 text-2xl font-semibold">Who Are We?</h1>
        </div>
      <div className="flex items-center justify-center border-[3px] border-green-500 p-1">
        <div className="flex items-center justify-center border-[3px] border-green-400 p-4">
          <h1 className="text-green-400 text-xl">
          In the fall semester of 2023, our president, known as Ruswal on Discord, founded this club with our Operations Lead, known as Flux on Discord, in order to close the gap of the actual experience that is needed to go from entry level noobs to formidable and knowledgeable security specialists, along with the right steps one should take in order to achieve their pursuits in this industry.
            {'\n'}
            <p>
            For a semester, we operated via Discord, built a small community of 100+ students, and gradually attracted Cybersecurity experts, hackers, engineers, and teachers from the Regina community. They had joined us and started helping other cybersecurity enthusiasts to get into the field guided by their knowledge and their expertise.
                </p>
            <p>
            Fast forward to 2024 of the winter semester, we showed what we had to offer when we participated in University of Regina's club fair, and introduced new and existing students to what our club was about and onboarded them.
                </p>
            <p>
            Then in the summer of 2024, we attended BSides YXE conference and competed in their Jeopardy CTF. With all of our knowledge, adaptability, and creativity combined, we managed to beat our sister club, University of Saskatchewan's very own Cybersecurity Club - earning us the winning title in the competition. It was not without the help of our club's members, experienced individuals, and the resources that came along with it that we managed to gain first place.
                </p>
            <p>
            In the coming weeks, we are planning to host our in-person event to get personal with the members and share our resources with them. With the event in mind, we will soon be posting more information about it, so stay tuned on our Discord and our Instagram!
                </p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("...")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("...")
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
