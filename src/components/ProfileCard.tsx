import { profile, contactIcons } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";

export default function ProfileCard() {
  return (
    <div className="bg-panel border border-border rounded-xl2 overflow-hidden lg:sticky lg:top-28">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={profileImg}
          alt={profile.name}
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 20%" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-panel via-panel/60 to-transparent" />
      </div>

      <div className="p-5 -mt-8 relative">
        <div className="mb-4 pb-4 border-b border-border">
          <div className="text-lg font-bold">{profile.name}</div>
          <span className="font-mono text-[11px] text-accent bg-accentDim px-2 py-0.5 rounded inline-block mt-1">
            {profile.role}
          </span>
        </div>

        <div className="grid gap-3 mb-4 text-sm">
          <Row label="Location" value={profile.location} />
          <Row label="GPA" value={profile.gpa} />
          <Row label="Email" value={profile.email} />
        </div>

        <div className="flex gap-2">
          {/* Perbaikan tag pembuka <a> untuk GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-panelSoft border border-border text-xs text-textSoft hover:border-accent hover:text-accent transition-colors duration-200 ease-out"
          >
            <img src={contactIcons.github} alt="" className="w-4 h-4 object-contain" />
            GitHub
          </a>
          
          {/* Perbaikan tag pembuka <a> untuk LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-panelSoft border border-border text-xs text-textSoft hover:border-accent hover:text-accent transition-colors duration-200 ease-out"
          >
            <img src={contactIcons.linkedin} alt="" className="w-4 h-4 object-contain" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-wider text-textFaint">{label}</div>
      <div className="text-textSoft">{value}</div>
    </div>
  );
}