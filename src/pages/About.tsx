import { Target, Eye, Lightbulb, Users } from "lucide-react";
import hawiFeysaPhoto from "@/assets/Hawi feysa photo.jpg";
import amanuelPhoto from "@/assets/Amanuel.png";
import kidusPhoto from "@/assets/kidus asebe.jpg";
import lamrotPhoto from "@/assets/lamrot.jpg";
import yohanesPhoto from "@/assets/Yohanes alemu.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Amanuel",
      position: "Software Engineer",
      image: amanuelPhoto,
    },
    {
      name: "Kidus Asebe",
      position: "Developer",
      image: kidusPhoto,
    },
    {
      name: "Lamrot",
      position: "Marketing Manager",
      image: lamrotPhoto,
    },
    {
      name: "Yohanes Alemu",
      position: "UI/UX Designer",
      image: yohanesPhoto,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            About <span className="text-gradient">Hawi Software</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A pioneering software company dedicated to transforming businesses
            through innovative digital solutions and cutting-edge technology.
          </p>
        </div>

        {/* CEO Section */}
        <div className="card-glass rounded-3xl overflow-hidden mb-16 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* CEO Image */}
            <div className="relative overflow-hidden">
              <img src={hawiFeysaPhoto} alt="Hawi Feyissa Ararssa" className="w-full h-full object-cover" />
            </div>
            
            {/* CEO Message */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <h3 className="text-3xl font-bold mb-2">Hawi Feyissa Ararssa</h3>
                <p className="text-primary font-semibold">CEO & Founder</p>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  "Hawi Software Solutions (HSS) is an emerging software firm located in Adama, Ethiopia producing quality software for its clients. It is established to steer customers through the next generation of business innovation powered by technology with state-of-the-art business automation, software development and consultation services.
"
                </p>
                <p>
                 HSS is powered by highly skilled professionals and developers, and equipped with the latest managerial and IT tools and works round the-clock to assure the timely delivery of your applications with the highest quality.
                </p>
                <p>
                  We don't just build software; we build partnerships with our clients, working together to achieve their goals and drive sustainable growth in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our talented professionals bring diverse expertise and passion to every project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card-glass rounded-2xl p-6 hover-glow group animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300 border-4 border-primary/20">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Overview */}
        <div className="card-glass rounded-3xl p-8 md:p-12 mb-16 animate-scale-in">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hawi Software Company is a dynamic and innovative technology firm
              based in Adama, Ethiopia. We specialize in creating bespoke
              software solutions that empower businesses to thrive in the
              digital age.
            </p>
            <p>
              Our team of expert developers, designers, and strategists work
              collaboratively to deliver high-quality software products that
              exceed expectations. From concept to deployment, we ensure every
              project receives the attention and expertise it deserves.
            </p>
            <p>
              We pride ourselves on staying ahead of technological trends,
              enabling us to provide our clients with state-of-the-art
              solutions that drive growth and innovation.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Innovation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To deliver exceptional software solutions that transform businesses and create lasting value for our clients through innovation, quality, and dedication.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description:
                "To be the leading software solutions provider in Ethiopia, recognized for our technical excellence, innovative approach, and commitment to client success.",
            },
            {
              icon: Lightbulb,
              title: "Our Innovation",
              description:
                "We embrace emerging technologies and creative problem-solving to develop unique solutions that give our clients a competitive edge in their industries.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card-glass rounded-2xl p-8 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="card-glass rounded-3xl p-8 md:p-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Hawi Software?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Expert Team",
                description:
                  "Our skilled professionals bring years of experience and expertise to every project.",
              },
              {
                title: "Client-Focused",
                description:
                  "We prioritize understanding your needs and delivering solutions that truly matter.",
              },
              {
                title: "Cutting-Edge Tech",
                description:
                  "We leverage the latest technologies to build scalable and future-proof solutions.",
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous testing and quality control ensure flawless performance and reliability.",
              },
              {
                title: "On-Time Delivery",
                description:
                  "We respect your deadlines and deliver projects on schedule without compromising quality.",
              },
              {
                title: "Ongoing Support",
                description:
                  "Our commitment extends beyond delivery with comprehensive maintenance and support.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
