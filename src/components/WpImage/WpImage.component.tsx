import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { WpImageProps } from './WpImage.props';
import { Wordpress } from '@/services/Wordpress.service';
import { Spinner } from '@/ui/Spinner/Spinner.component';

export const WpImage = ({ idValue, ...props }: WpImageProps) => {
	// const { isLoading, data, error } =
	// 	useQuery({ queryKey: [`image-${idValue}`], queryFn: () => Wordpress.getMediaById(idValue) });

	// if (isLoading) return <Spinner />;
	// if (data) return <img {...props} src={data.data.guid.rendered} alt={props.alt} />;
	// if (error) return <img {...props} src="" alt={error.message} />;
	return <></>;
};