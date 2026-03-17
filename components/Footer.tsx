export function Footer() {
  return (
    <footer className="border-t border-brand-border mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} GeoGain. All tools are free to use.</p>
        <div className="flex items-center gap-4">
          <a href="https://youtube.com/@GeoGainHub" target="_blank" rel="noopener" className="hover:text-white/70 transition">YouTube</a>
          <a href="https://tiktok.com/@geogainhub" target="_blank" rel="noopener" className="hover:text-white/70 transition">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
