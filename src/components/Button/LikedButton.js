import { useState } from 'react';
import styled from 'styled-components';
import { Heart } from 'lucide-react';

const StyledHeart = styled(Heart)`
    width: 50px;
    height: 50px;
    margin-top: 10px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.2);
    }
`;

export function LikeButton() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => setLiked((prev) => !prev);

    return (
        <StyledHeart
            color={liked ? '#E3092F' : '#FFFFFF'} // vermelho se curtido, branco se não
            fill={liked ? '#E3092F' : 'none'}     // preenchido se curtido
            onClick={toggleLike}
        />
    );
}
