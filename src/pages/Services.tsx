import {
  Code,
  Globe,
  Smartphone,
  Cloud,
  LineChart,
  Palette,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs. We build scalable, robust applications using modern technologies and best practices.",
      features: [
        "Custom Application Development",
        "Enterprise Software Solutions",
        "API Development & Integration",
        "Legacy System Modernization",
      ],
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description:
        "Beautiful, responsive websites that captivate your audience. From corporate sites to e-commerce platforms, we create digital experiences that convert.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "CMS Development",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android. Engaging, intuitive apps that users love and businesses rely on.",
      features: [
        "iOS & Android Apps",
        "Cross-Platform Development",
        "Mobile UI/UX Design",
        "App Maintenance & Support",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services. We help you leverage the power of cloud computing for improved efficiency and flexibility.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Cloud Security",
        "DevOps Implementation",
      ],
    },
    {
      icon: LineChart,
      title: "IT Consultancy",
      description:
        "Strategic technology consulting to guide your digital transformation. Expert advice on technology stack, architecture, and implementation strategies.",
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "System Architecture",
        "Technical Audits",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that delights and performs. We create intuitive interfaces that provide exceptional user experiences and drive engagement.",
      features: [
        "User Research & Testing",
        "Interface Design",
        "Prototyping",
        "Design Systems",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive software solutions designed to drive your business
            forward. We combine expertise, innovation, and dedication to
            deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass rounded-2xl p-8 hover-glow group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="card-glass rounded-3xl p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We specialize in creating tailored solutions that perfectly fit
              your unique business requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
