import { Text } from "@/app/components/common/text/text";
import { Button } from "@/app/components/common/button/button";
import "@/style/bookColumn.scss";

interface BookColumnProps {
  id: number;
  title: string;
  ISBN: string;
  buttonLabel: string;
  onClick: (id: number) => void; // 引数に `id` を受け取り、戻り値なし
}
export const BookColumn = (props: BookColumnProps) => {
  const { id, title, ISBN, onClick, buttonLabel} = props;
  return (
    <div className="book-column">
      <Text variant="body1" className="book-column__id">
        {id}
      </Text>
      <Text variant="h3" className="book-column__title">
        {title}
      </Text>
      <Text variant="body1" className="book-column__isbn">
        {ISBN}
      </Text>
      <Button
        label={buttonLabel}
        type="minimal"
        className="book-column__button"
        onClick={() => onClick(id)}
      />
    </div>
  );
};