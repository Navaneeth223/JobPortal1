export default function IconText({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-5 h-5 text-indigo-500" />
      <span>{text}</span>
    </div>
  );
}
