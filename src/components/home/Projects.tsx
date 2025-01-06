export default function Projects() {
  return (
    <div className="bg-transparent bg-opacity-20 backdrop:filter backdrop-blur-md w-full rounded-lg shadow-lg p-6">
      <h2 className="text-2xl text-white font-semibold mb-2">Projects</h2>
      <p className="text-white">
        include a screen shot of each project and then make clickable so the
        user can go to each project and interact with it.
      </p>
      <ul className="mt-4 space-y-4">
        <li>
          <h3 className="text-xl text-white font-medium">Market Mate</h3>
          <p className="text-lg text-white">
            A brief description of your first project.
          </p>
        </li>
        <li className="mb-8">
          <h3 className="text-xl text-white font-medium">TimeTrack</h3>

          <p className="text-lg text-white mt-2">
            TimeTrack is a comprehensive project management application designed
            to streamline how organizations handle their teams and projects. It
            provides features for adding or removing project managers and
            workers, creating new projects, assigning team members, and
            submitting timesheets—all under a user-friendly interface. Project
            Managers can also visualize the hours allocated across various
            projects, offering valuable insights for resource planning and time
            tracking.
          </p>

          <h4 className="text-md text-white font-semibold mt-4">
            How It Was Accomplished
          </h4>
          <p className="text-lg text-white mt-2">
            We developed TimeTrack as a serverless application, leveraging a{" "}
            <strong>React</strong> front end built with{" "}
            <strong>TypeScript</strong>, <strong>Vite</strong>, and{" "}
            <strong>TailwindCSS</strong>
            (including some components from <strong>shadcn</strong>). On the
            back end, we utilized
            <strong>AWS</strong> services such as <strong>API Gateway</strong>,{" "}
            <strong>Lambda</strong>,<strong>Cognito</strong>,{" "}
            <strong>S3</strong>, <strong>SES</strong>, <strong>SNS</strong>,
            <strong>SQS</strong>, and more, with a <strong>PostgreSQL</strong>{" "}
            database hosted on
            <strong>AWS RDS</strong>. This architecture enabled scalable and
            efficient handling of both application logic and user authentication
            while reducing server management overhead.
          </p>

          <h4 className="text-md text-white font-semibold mt-4">
            My Contributions
          </h4>
          <p className="text-lg text-white mt-2">
            I led a team of ten developers, coordinating tasks across front-end
            and back-end over a rapid three-week development cycle. We followed
            an <strong>Agile</strong> methodology with scrums every two days and
            split our group into two sub-teams focusing on separate parts of the
            stack. Initially, I concentrated on building the front end for a
            seamless user experience. As our deadline approached, I pivoted to a{" "}
            <strong>full-stack role</strong>, setting up and configuring{" "}
            <strong>API Gateway</strong> routes, creating
            <strong>Lambda</strong> functions, and managing our{" "}
            <strong>PostgreSQL</strong> database on <strong>AWS RDS</strong>.
          </p>
          <h4 className="text-md text-white font-semibold mt-4">
            What We Could Have Done Better
          </h4>
          <p className="text-lg text-white mt-2">
            In the rush to deliver TimeTrack, we did not establish a
            standardized process for updating or adding back-end features in our{" "}
            <strong>AWS</strong> environment. Some team members made changes
            directly in the AWS console, while others relied on a Git-based
            pseudo-CI/CD pipeline. When our AWS account was deleted, much of
            that manually created infrastructure was lost. To keep the project
            available for demonstration, I had two options:
          </p>
          <ul className="list-disc list-inside text-lg text-white mt-2">
            <li>Rebuild all lost API routes and Lambda functions</li>
            <li>Use mock data stored locally in the application</li>
          </ul>
          <p className="text-lg text-white mt-2">
            Due to time and cost constraints, we opted to use local mock data
            instead of fully reconstructing the original infrastructure.
          </p>
          <h4 className="text-md text-white font-semibold mt-4">
            Technologies Used
          </h4>
          <ul className="list-disc list-inside text-lg text-white mt-2">
            <li>React (TypeScript, Vite, TailwindCSS, shadcn)</li>
            <li>AWS Lambda</li>
            <li>Amazon Cognito</li>
            <li>Amazon S3</li>
            <li>AWS CodeBuild</li>
            <li>AWS CodePipeline</li>
            <li>Amazon RDS (PostgreSQL)</li>
            <li>Amazon API Gateway</li>
            <li>Amazon SQS</li>
            <li>Amazon SES</li>
            <li>Amazon SNS</li>
            <li>Amazon CloudWatch</li>
            <li>GitHub</li>
            <li>AWS Amplify</li>
            <li>AWS IAM</li>
            <li>Amazon EventBridge</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
