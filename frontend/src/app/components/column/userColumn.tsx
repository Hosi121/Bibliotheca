import { Text } from "@/app/components/common/text/text";
import { Button } from "@/app/components/common/button/button";
import "@/style/userColumn.scss";

interface userColumnProps {
  id: string;
  buttonLabel: string;
  onClick: (id: string) => void; // 引数に `id` を受け取り、戻り値なし
}

export const UserColumn = (props: userColumnProps) => {
  const { id, onClick, buttonLabel } = props;
  return (
    <div className="user-column">
      <Text variant="h2" className="user-column__id">
        {id}
      </Text>
      <Button
        label={buttonLabel}
        type="minimal"
        className="user-column__button"
        onClick={() => onClick(id)}
      />
    </div>
  );
};
