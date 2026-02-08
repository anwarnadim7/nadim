"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaTerminal } from "react-icons/fa";

type CommandOutput = {
  command: string;
  output: React.ReactNode;
};

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div className="mb-2">
          <p className="text-[#FF9900]">Welcome to Nadim&apos;s Portfolio v2.0</p>
          <p className="text-gray-400">Type <span className="text-[#FF9900]">&apos;help&apos;</span> to see available commands.</p>
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode;

    switch (trimmedCmd) {
      case "help":
        output = (
            <div className="grid grid-cols-2 gap-2 text-gray-300 max-w-md">
              <span className="text-[#FF9900]">about</span> <span>- Who am I?</span>
              <span className="text-[#FF9900]">skills</span> <span>- My tech stack</span>
              <span className="text-[#FF9900]">projects</span> <span>- Recent work</span>
              <span className="text-[#FF9900]">contact</span> <span>- Get in touch</span>
              <span className="text-[#FF9900]">cat resume</span> <span>- View resume</span>
              <span className="text-[#FF9900]">certifications</span> <span>- AWS certs</span>
              <span className="text-[#FF9900]">github</span> <span>- GitHub profile</span>
              <span className="text-[#FF9900]">aws regions</span> <span>- List regions</span>
              <span className="text-[#FF9900]">history</span> <span>- Command history</span>
              <span className="text-[#FF9900]">date</span> <span>- Current time</span>
              <span className="text-[#FF9900]">clear</span> <span>- Clear screen</span>
              <span className="text-[#FF9900]">whoami</span> <span>- Current user</span>
            </div>
        );
        break;
      case "about":
        output = (
          <p className="text-green-300">
            MCA Student specializing in Cloud Computing & DevOps.
            Passionate about scalable architectures and automation.
          </p>
        );
        break;
      case "skills":
        output = (
          <p className="text-blue-300">
            [AWS, Docker, Kubernetes, Terraform, Python, Node.js]
          </p>
        );
        break;
      case "projects":
        output = (
          <div className="flex flex-col gap-1">
             <a href="#projects" className="text-cyan-300 underline hover:text-cyan-400">SERVERLESS-IMG-PROC</a>
             <a href="#projects" className="text-cyan-300 underline hover:text-cyan-400">MICROSERVICES-ECOM</a>
             <p className="text-gray-500 italic">Use &apos;ls projects&apos; for details.</p>
          </div>
        );
        break;
      case "contact":
        output = <p className="text-purple-300">Email: contact@nadim.in</p>;
        break;
      case "whoami":
        output = <p className="text-pink-300">guest@portfolio</p>;
        break;
      case "ls":
      case "ls projects":
        output = (
          <div className="grid grid-cols-1 gap-1">
           <span>drwxr-xr-x  serverless-img-proc</span>
           <span>drwxr-xr-x  microservices-ecom</span>
           <span>drwxr-xr-x  vpc-terraform-modules</span>
          </div>
        )
        break;
      case "pwd":
        output = <p>/home/nadim/portfolio</p>;
        break;
      case "cat resume":
      case "cat resume.pdf":
        output = (
          <div className="text-gray-300 space-y-2">
            <p className="text-[#FF9900] font-bold">📄 NADIM - Cloud Engineer (AWS)</p>
            <p>🎓 MCA (Cloud Computing) Student</p>
            <p>💼 Specialization: AWS, Terraform, Docker, Kubernetes</p>
            <p>🏆 Certifications: AWS Solutions Architect (In Progress)</p>
            <p>📧 contact@nadim.in</p>
            <a href="/resume.pdf" download className="text-cyan-300 underline hover:text-cyan-400">
              → Download Full Resume (PDF)
            </a>
          </div>
        );
        break;
      case "certifications":
      case "certs":
        output = (
          <div className="text-gray-300 space-y-1">
            <p className="text-[#FF9900]">AWS Certifications Progress:</p>
            <p>✅ Solutions Architect - Associate [████████░░] 75%</p>
            <p>⏳ Developer - Associate [░░░░░░░░░░] Planned Q3 2026</p>
            <p>⏳ SysOps Administrator [░░░░░░░░░░] Planned Q4 2026</p>
          </div>
        );
        break;
      case "github":
        output = (
          <p className="text-cyan-300">
            GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400">
              github.com/yourusername
            </a>
          </p>
        );
        break;
      case "aws regions":
      case "aws":
        output = (
          <div className="text-gray-300 space-y-1">
            <p className="text-[#FF9900]">☁️ AWS Regions (Top 10):</p>
            <p>🌍 us-east-1 (N. Virginia)</p>
            <p>🌍 us-west-2 (Oregon)</p>
            <p>🌍 eu-west-1 (Ireland)</p>
            <p>🌍 ap-southeast-1 (Singapore)</p>
            <p>🌍 ap-northeast-1 (Tokyo)</p>
            <p>🌍 eu-central-1 (Frankfurt)</p>
            <p>🌍 ap-south-1 (Mumbai)</p>
            <p>🌍 sa-east-1 (São Paulo)</p>
            <p>🌍 ca-central-1 (Canada)</p>
            <p>🌍 ap-southeast-2 (Sydney)</p>
          </div>
        );
        break;
      case "history":
        output = (
          <div className="text-gray-300">
            {commandHistory.length === 0 ? (
              <p className="text-gray-500">No command history yet.</p>
            ) : (
              commandHistory.map((cmd, idx) => (
                <p key={idx}>{idx + 1}  {cmd}</p>
              ))
            )}
          </div>
        );
        break;
      case "date":
        output = (
          <p className="text-gray-300">
            {new Date().toLocaleString('en-US', { 
              weekday: 'short', 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit', 
              second: '2-digit' 
            })}
          </p>
        );
        break;
      case "clear":
        setHistory([]);
        setCommandHistory([]);
        setHistoryIndex(-1);
        return;
      case "":
        output = null;
        break;
      default:
        output = (
            <p className="text-red-400">
                Command not found: {trimmedCmd}. Type <span className="text-yellow-300">&apos;help&apos;</span>.
            </p>
        );
    }

    setHistory([...history, { command: cmd, output }]);
    if (cmd.trim()) {
      setCommandHistory([...commandHistory, cmd.trim()]);
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const focusInput = () => {
      inputRef.current?.focus();
  }

  return (
    <div 
        className="w-full max-w-2xl mx-auto mt-12 bg-[#1B2533]/90 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-2xl font-mono text-sm shadow-[#FF9900]/5 cursor-text"
        onClick={focusInput}
    >
      {/* Window Controls */}
      <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-xs">
            <FaTerminal />
            <span>bash — 80x24</span>
        </div>
        <div className="w-8"></div> {/* Spacer for alignment */}
      </div>

      {/* Terminal Output */}
      <div className="p-4 h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent text-left" onClick={(e) => e.stopPropagation()}>
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex gap-2 text-gray-400">
               <span className="text-[#FF9900]">guest@portfolio</span>:<span className="text-gray-400">~</span>$ 
               <span className="text-white">{item.command}</span>
            </div>
            <div className="pl-4 mt-1 leading-relaxed">
                {item.output}
            </div>
          </div>
        ))}
        
        {/* Input Area */}
        <div className="flex gap-2 items-center text-gray-400">
            <span className="text-[#FF9900]">guest@portfolio</span>:<span className="text-gray-400">~</span>$ 
            <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0 p-0"
                autoFocus
                spellCheck={false}
                autoComplete="off"
            />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;
