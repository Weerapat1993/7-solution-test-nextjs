"use client"

import { Typography } from "@mui/material";
import styles from "./page.module.css";
import { useUserList } from "@/modules/user/hooks/useUserList";

export default function Assignment2Page() {
	const { dataNormalization } = useUserList()
  return (
    <main className={styles.main}>
      <Typography align="center" variant="h3" gutterBottom>
        Assignment 2
      </Typography>
			<pre>
				{JSON.stringify(dataNormalization, null, '  ')}
			</pre>
    </main>
  );
}
