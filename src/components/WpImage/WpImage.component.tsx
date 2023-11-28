import React from 'react';

// import { useQuery } from '@tanstack/react-query';
import { WpImageProps } from './WpImage.props';
import { Wordpress } from '@/services/Wordpress.service';
import Image from 'next/image';
// import { Wordpress } from '@/services/Wordpress.service';
// import { Spinner } from '@/ui/Spinner/Spinner.component';

export const WpImage = async ({ idValue, alt, className }: WpImageProps) => {
	// const { isLoading, data, error } =
	// 	useQuery({ queryKey: [`image-${idValue}`], queryFn: () => Wordpress.getMediaById(idValue) });

	// if (isLoading) return <Spinner />;
	// if (data) return <img {...props} src={data.data.guid.rendered} alt={props.alt} />;
	// if (error) return <img {...props} src="" alt={error.message} />;

	if (idValue !== 0) {
		const { data: image } = await Wordpress.getMediaById(idValue);

		return <>
			<Image
				className={className}
				layout="responsive"
				src={image.guid.rendered}
				alt={alt}
				width={10000}
				height={10000} />
		</>;
	}
	else {
		return <>Нет картинка</>;
	}
};