"use client";

import type { CommentsProps } from '../lib/definitions';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/comments.module.css';

export const dynamic = "force-dynamic";

export default function Comments() {

    const [data, setData] = useState<CommentsProps[]>([]);
    const [newName, setNewName] = useState<string>("");
    const [newComment, setNewComment] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/comments");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newId = data.length + 1;
        const newEntry: CommentsProps = {
            id: newId,
            name: newName,
            comment: newComment,
        };
        setData([...data, newEntry]);

        try {
            const response = await fetch('/api/comments', {
                method: "POST",
                body: JSON.stringify(newEntry),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error('Failed to add comment');
            }
        } catch (error) {
            console.error("Error adding comment:", error);
        }

        setNewName("");
        setNewComment("");
    };

    const handleDelete = async (id: number) => {
        // Eliminar el comentario del estado local
        const updatedData = data.filter(comment => comment.id !== id);
        setData(updatedData);

        // Enviar una solicitud para eliminar el comentario del servidor
        try {
            const response = await fetch(`/api/comments/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete comment');
            }
        } catch (error) {
            console.error('Error deleting comment:', error);
            // Si ocurre un error, puedes revertir el estado local si es necesario
            setData(data);
        }
    };

    return (
        <main className={styles.maincrud}>
            <h1 className={styles.title}>All comments:</h1>

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.formone}>
                    <h2>Create comment</h2>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Your name"
                        className={styles.input}
                    />
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Your comment"
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>Enter</button>
                </form>
            </div>

            <div className={styles.cardContainer}>
                {data.map((comment) => (
                    <div key={comment.id} className={styles.card}>
                        <div className={styles.cardContent}>
                            <p>ID: {comment.id}</p>
                            <p>Name: {comment.name}</p>
                            <p>Comment: {comment.comment}</p>
                        </div>
                        <button onClick={() => handleDelete(comment.id)} className={`${styles.button} ${styles.deleteButton}`}>Delete</button>
                    </div>
                ))}
            </div>
        </main>
    );
}
