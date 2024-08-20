'use client';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Checkbox, Link } from '@nextui-org/react';
import { MailIcon } from './icon/MailIcon';
import { LockIcon } from './icon/LockIcon';
import { useState } from 'react';

const ModalAuth = ({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) => {
	const [registrInfo, setRegistrInfo] = useState({});
	return (
		<Modal isOpen={isOpen} backdrop='blur' size='2xl' placement='center' onOpenChange={onOpenChange}>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className='flex flex-col gap-1'>Войти</ModalHeader>
						<ModalBody>
							<Input autoFocus endContent={<MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />} label='Email' placeholder='Enter your email' variant='bordered' />
							<Input endContent={<MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />} label='Email' placeholder='Enter your email' variant='bordered' />
							
              <Input
								endContent={<LockIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />}
								label='Password'
								placeholder='Enter your password'
								type='password'
								variant='bordered'
							/>
							<div className='flex py-2 px-1 justify-end'>
								<Link className=' font-semibold' color='primary' href='#' size='sm'>
									уже есть аккаунт?
								</Link>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button color='danger' variant='flat' onPress={onClose}>
								закрыть
							</Button>
							<Button color='primary' onPress={onClose}>
								войти
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default ModalAuth;
