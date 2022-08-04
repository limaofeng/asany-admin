import { Input } from '@/metronic';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;
  return (
    <div className="px-9 pt-8">
      <Input.Search solid size="lg" onSearch={onSearch} placeholder="搜索..." />
    </div>
  );
}

export default SearchBar;
