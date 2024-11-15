import { skills } from "../data";
import { motion } from "framer-motion";

const SkillSet = () => {
  return (
    <section id="skills">
      <div>
        <h1 className="heading pt-20">
          I have<span className="text-purple"> expertise in</span>
        </h1>

        <motion.div
          className="w-full mt-10 min-h-fit rounded-3xl p-10 flex flex-wrap gap-3 border-black-200 items-center justify-center"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="w-fit h-[3rem] py-2 px-4 rounded-xl cursor-pointer flex justify-center items-center gap-2 border border-slate-800 "
              initial={{
                y: 10,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              viewport={{
                once: false,
                amount: 0.9,
              }}
            >
              <div>
                <img src={skill.img} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSet;
