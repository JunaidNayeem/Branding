import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        The technologies I ship with every day
      </h5>
      <ul className="flex justify-center">
        <p align="center">
          <a href="https://skillicons.dev">
            <img
              src="https://skillicons.dev/icons?i=typescript,react,nextjs,nodejs,express,angular,tailwind"
              alt="TypeScript, React, Next.js, Node.js, Express, Angular, Tailwind CSS"
              loading="lazy"
            />
            <br />
            <img
              src="https://skillicons.dev/icons?i=postgres,supabase,prisma,mongodb,docker,kubernetes,aws,vercel"
              alt="PostgreSQL, Supabase, Prisma, MongoDB, Docker, Kubernetes, AWS, Vercel"
              loading="lazy"
            />
          </a>
        </p>
      </ul>
    </div>
  );
};

export default CompanyLogos;
