/* eslint-disable @typescript-eslint/no-unused-vars */
import Cards from "./Cards";
import CardContent from "../CardContent";
import Button from "./Button";
import Card from "./Card";

function Explore() {
  const contents = [
    {
      title: "Connect and collaborate",
      subtitle: "Empowring students",
      desc: `Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning`,
      lists: [
        "students pracrice thier own pace first",
        "students pracrice thier own pace first",
        "students pracrice thier own pace first",
      ],
    },
    {
      title: "Access resource anytime, anywhere",
      subtitle: "Empowring students",
      desc: "Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning",
      lists: [
        "students pracrice thier own pace first",
        "students pracrice thier own pace first",
        "students pracrice thier own pace first",
      ],
    },
  ];

  return (
    <>
      <div className="p-10 m-5 ">
        <div className="flex justify-center text-start mb-10 ">
          <p className="mb-12  font-medium text-black lg:text-6xl  dark:text-gray-400">
            <span className="text-2xl font-bold lg:font-normal lg:text-3xl mb-10">
              Empowering Students
            </span>{" "}
            <br /> <br />
            Enhance your learning experience with easy <br /> accessto a variety
            of college resources
          </p>
        </div>
        <div className="flex flex-wrap gap-40 items-center justify-center">
          {CardContent.map((Content) => (
            <Cards
              key={Content.id}
              icon={Content.icon}
              title={Content.title}
              disc={Content.disc}
            />
          ))}
        </div>
      </div>

      {contents.map((content, index) => (
        <Card reverse={index % 2 == 0 ? true : false} content={content} />
      ))}

   

      <section className="h-[70vh] bg-gradient-to-r from-green-100 via-green-300 to-green-100 flex justify-center items-center mt-60">
        <div>
          <h3 className="text-center text-5xl font-semibold">
            Ready to get started
          </h3>
          <p className="text-xl text-center mt-5">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Ullam saepe nulla <br /> totam atque assumenda quo officiis, hic
            odit nisi
          </p>

          <div className="flex justify-center mt-10">
            <Button className="py-4  px-14 mr-2 mb-2 text-lg font-medium text-black focus:outline-none border-none bg-green-400  rounded-md  hover:bg-green-400 hover:text-white hover:border-hidden focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Start exploring
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
