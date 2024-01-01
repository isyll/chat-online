function Avatar({ src }: { src: string }) {
  return (
    <figure className="w-10">
      <img src={src} alt="image" className="rounded-full" />
    </figure>
  );
}

export default Avatar;
