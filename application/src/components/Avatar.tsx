function Avatar({ src, className }: { src: string; className?: string }) {
  return (
    <figure className={'w-10 ' + (className ? className : '')}>
      <img src={src} alt="image" className="rounded-full" />
    </figure>
  );
}

export default Avatar;
