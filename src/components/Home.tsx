import Menu from './Menu';
function Home() {
  return (
    <div className="h-screen w-screen bg-gray-700 text-gray-300">
      <Menu />
      <p>임시 미러사이트 입니다.</p>
      <p>데이터는 euddb.website 에서 제공하는 데이터를 기반으로 제작되었습니다.</p>
      <ul>
        <li><a href="https://euddb.website/" target="_blank" rel="noreferrer">https://euddb.website/</a></li>
        <li><a href="http://farty1billion.dyndns.org/EUDDB/" target="_blank" rel="noreferrer">http://farty1billion.dyndns.org/EUDDB/</a></li>
      </ul>

    </div>
  );
}
export default Home;
